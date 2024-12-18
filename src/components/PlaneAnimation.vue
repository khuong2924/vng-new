<template>
  <div class="relative h-20 overflow-hidden rounded-lg fixed-container">
    <img id="movingPlane" src="/src/assets/icon_header.gif" alt="Máy bay" class="fixed-size">
  </div>
</template>

<script>
export default {
  name: 'PlaneAnimation',
  mounted() {
    this.initPlaneAnimation()
  },
  methods: {
    initPlaneAnimation() {
      const plane = document.getElementById("movingPlane")
      const container = document.querySelector(".fixed-container")
      let position = 0
      let direction = 1
      const speed = 1

      function movePlane() {
        const containerWidth = container.clientWidth
        const planeWidth = plane.clientWidth
        position += speed * direction

        if (position + planeWidth > containerWidth || position < 0) {
          direction *= -1
          plane.style.transform = `translateY(-50%) scaleX(${direction})`
        }

        plane.style.left = position + "px"
        requestAnimationFrame(movePlane)
      }

      movePlane()
    }
  }
}
</script>

<style scoped>
.fixed-container {
  width: 1200px;
  height: 200px;
  position: relative;
  overflow: hidden;
}

#movingPlane {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) scaleX(1);
  width: 700px;
  height: auto;
  transition: transform 0.2s ease;
}
</style> 