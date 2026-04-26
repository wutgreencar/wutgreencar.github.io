'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

type ViewerRefs = {
  renderer?: THREE.WebGLRenderer
  frame?: number
  resizeObserver?: ResizeObserver
}

type ModelOption = {
  label: string
  fileName: string
  path?: string
  kind: 'combined' | 'single'
}

const models = [
  { label: '组合模型', fileName: 'CAR.glb + Untitled.glb', kind: 'combined' },
  { label: '小车模型', fileName: 'CAR.glb', path: '/models/CAR.glb', kind: 'single' },
  { label: '机械臂模型', fileName: 'Untitled.glb', path: '/models/Untitled.glb', kind: 'single' },
] satisfies ModelOption[]

function createWheel() {
  const wheel = new THREE.Group()

  const tire = new THREE.Mesh(
    new THREE.CylinderGeometry(0.36, 0.36, 0.28, 48),
    new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.55,
      metalness: 0.2,
    }),
  )
  tire.rotation.z = Math.PI / 2
  wheel.add(tire)

  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 0.3, 32),
    new THREE.MeshStandardMaterial({
      color: 0xa7f3d0,
      roughness: 0.4,
      metalness: 0.55,
    }),
  )
  hub.rotation.z = Math.PI / 2
  wheel.add(hub)

  return wheel
}

function createRobotModel() {
  const robot = new THREE.Group()

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(3.4, 0.56, 1.6),
    new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      roughness: 0.42,
      metalness: 0.45,
    }),
  )
  body.position.y = 0.72
  robot.add(body)

  const topPlate = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 0.18, 1.08),
    new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.35,
      metalness: 0.35,
    }),
  )
  topPlate.position.y = 1.11
  robot.add(topPlate)

  const sensorBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.38, 0.56),
    new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.32,
      metalness: 0.5,
    }),
  )
  sensorBase.position.set(-1.12, 1.46, 0)
  robot.add(sensorBase)

  const lens = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.18, 0.08, 32),
    new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.1,
    }),
  )
  lens.rotation.x = Math.PI / 2
  lens.position.set(-1.5, 1.48, 0)
  robot.add(lens)

  const armBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.34, 0.2, 36),
    new THREE.MeshStandardMaterial({
      color: 0x374151,
      roughness: 0.35,
      metalness: 0.6,
    }),
  )
  armBase.position.set(0.82, 1.34, 0)
  robot.add(armBase)

  const shoulder = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 1.1, 0.28),
    new THREE.MeshStandardMaterial({
      color: 0xd1fae5,
      roughness: 0.45,
      metalness: 0.25,
    }),
  )
  shoulder.position.set(1.02, 1.92, 0)
  shoulder.rotation.z = -0.46
  robot.add(shoulder)

  const forearm = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.92, 0.24),
    new THREE.MeshStandardMaterial({
      color: 0x86efac,
      roughness: 0.38,
      metalness: 0.3,
    }),
  )
  forearm.position.set(1.52, 2.32, 0)
  forearm.rotation.z = 0.78
  robot.add(forearm)

  const gripper = new THREE.Group()
  const clawMaterial = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.35,
    metalness: 0.4,
  })
  const clawLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 0.08), clawMaterial)
  clawLeft.position.z = 0.18
  clawLeft.rotation.x = 0.42
  const clawRight = clawLeft.clone()
  clawRight.position.z = -0.18
  clawRight.rotation.x = -0.42
  gripper.add(clawLeft, clawRight)
  gripper.position.set(1.9, 2.68, 0)
  gripper.rotation.z = 0.62
  robot.add(gripper)

  const wheelPositions = [
    [-1.3, 0.36, 0.92],
    [0, 0.36, 0.92],
    [1.3, 0.36, 0.92],
    [-1.3, 0.36, -0.92],
    [0, 0.36, -0.92],
    [1.3, 0.36, -0.92],
  ]
  wheelPositions.forEach(([x, y, z]) => {
    const wheel = createWheel()
    wheel.position.set(x, y, z)
    robot.add(wheel)
  })

  const crop = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 32, 24),
    new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.55,
      metalness: 0.05,
    }),
  )
  crop.position.set(2.2, 2.88, 0.38)
  robot.add(crop)

  return robot
}

export default function ModelViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const refs = useRef<ViewerRefs>({})
  const [activeModel, setActiveModel] = useState(models[0])
  const [viewerStatus, setViewerStatus] = useState('模型加载中')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let mounted = true
    setViewerStatus(`${activeModel.label}加载中`)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x111315)

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(4.5, 3.2, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)
    refs.current.renderer = renderer

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.minDistance = 3.2
    controls.maxDistance = 8
    controls.target.set(0.25, 1.25, 0)

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(3.4, 96),
      new THREE.MeshStandardMaterial({
        color: 0x1f2428,
        roughness: 0.82,
        metalness: 0.1,
      }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)

    const grid = new THREE.GridHelper(6, 12, 0x22c55e, 0x374151)
    grid.position.y = 0.01
    scene.add(grid)

    const modelRoot = new THREE.Group()
    scene.add(modelRoot)

    const fitModel = (model: THREE.Object3D, targetSize = 3.2) => {
      model.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true
          object.receiveShadow = true
        }
      })

      const box = new THREE.Box3().setFromObject(model)
      const size = new THREE.Vector3()
      box.getSize(size)
      const maxAxis = Math.max(size.x, size.y, size.z)
      const scale = maxAxis > 0 ? targetSize / maxAxis : 1
      model.scale.setScalar(scale)

      model.updateMatrixWorld(true)
      const scaledBox = new THREE.Box3().setFromObject(model)
      const center = new THREE.Vector3()
      scaledBox.getCenter(center)
      model.position.x -= center.x
      model.position.z -= center.z
      model.position.y -= scaledBox.min.y

      return model
    }

    const prepareModel = (model: THREE.Object3D, targetSize = 3.2) => {
      fitModel(model, targetSize)
      modelRoot.add(model)
    }

    const orientCar = (model: THREE.Object3D) => {
      model.rotation.x = -Math.PI / 2
      model.updateMatrixWorld(true)
      return model
    }

    const handleLoad = (model: THREE.Object3D) => {
      prepareModel(model)
      if (mounted) setViewerStatus('')
    }
    const handleError = () => {
      prepareModel(createRobotModel())
      if (mounted) setViewerStatus(`${activeModel.fileName} 加载失败，已显示示意模型`)
    }

    const loader = new GLTFLoader()

    if (activeModel.kind === 'combined') {
      Promise.all([
        loader.loadAsync('/models/CAR.glb'),
        loader.loadAsync('/models/Untitled.glb'),
      ])
        .then(([carGltf, armGltf]) => {
          const combined = new THREE.Group()
          const car = fitModel(orientCar(carGltf.scene), 3.2)
          const arm = fitModel(armGltf.scene, 1.4)

          // Place arm at front-left of car, base resting on car's top surface
          const carBox = new THREE.Box3().setFromObject(car)
          const armBox = new THREE.Box3().setFromObject(arm)
          arm.position.set(
            carBox.min.x + (carBox.max.x - carBox.min.x) * 0.25,
            carBox.max.y - armBox.min.y,
            carBox.min.z + (carBox.max.z - carBox.min.z) * 0.25,
          )
          combined.add(car, arm)
          handleLoad(combined)
        })
        .catch(handleError)
    } else if (activeModel.path) {
      loader.load(
        activeModel.path,
        (gltf) => handleLoad(activeModel.fileName === 'CAR.glb' ? orientCar(gltf.scene) : gltf.scene),
        undefined,
        handleError,
      )
    }

    modelRoot.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true
        object.receiveShadow = true
      }
    })

    const ambient = new THREE.HemisphereLight(0xdbeafe, 0x1f2937, 2.1)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xffffff, 3)
    keyLight.position.set(4, 7, 5)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.set(1024, 1024)
    scene.add(keyLight)

    const accentLight = new THREE.PointLight(0x22c55e, 18, 7)
    accentLight.position.set(-2.8, 2.2, -2)
    scene.add(accentLight)

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    resize()

    refs.current.resizeObserver = new ResizeObserver(resize)
    refs.current.resizeObserver.observe(container)

    const animate = () => {
      modelRoot.rotation.y += 0.0025
      controls.update()
      renderer.render(scene, camera)
      refs.current.frame = window.requestAnimationFrame(animate)
    }
    animate()

    return () => {
      mounted = false
      if (refs.current.frame) window.cancelAnimationFrame(refs.current.frame)
      refs.current.resizeObserver?.disconnect()
      controls.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [activeModel])

  return (
    <div className="relative h-[420px] w-full overflow-hidden border border-gray-700 bg-gray-900 shadow-2xl shadow-black/30 md:h-[560px]">
      <div className="absolute right-4 top-4 z-10 flex gap-2 border border-gray-700 bg-gray-900/80 p-1 backdrop-blur">
        {models.map((model) => (
          <button
            key={model.fileName}
            type="button"
            className={`px-3 py-2 text-sm font-medium transition ${
              activeModel.fileName === model.fileName
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
            onClick={() => setActiveModel(model)}
          >
            {model.label}
          </button>
        ))}
      </div>
      <div
        ref={containerRef}
        className="h-full w-full"
        aria-label="机器人三维模型展示"
      />
      {viewerStatus && (
        <div className="pointer-events-none absolute left-4 top-4 border border-gray-700 bg-gray-900/80 px-3 py-2 text-sm text-gray-200 backdrop-blur">
          {viewerStatus}
        </div>
      )}
    </div>
  )
}
