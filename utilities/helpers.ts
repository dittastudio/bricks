const calculateAspectRatio = (width: number, height: number, newWidth: number = 100): string => {
  const aspectRatioWidth = newWidth
  const aspectRatioHeight = Math.round((height / width) * aspectRatioWidth)

  return `${aspectRatioWidth}:${aspectRatioHeight}`
}

const ratioDimensions = (
  ratio: Bricks.TAspectRatios | string | number,
): Bricks.ImageDimensions => {
  const parts = ratio.toString().split(':').map((num: string): number => Number(num))

  return {
    width: parts[0],
    height: parts[1],
  }
}

const wait = (ms: number = 0) => new Promise(resolve => setTimeout(resolve, ms))

const validAspectRatio = (ratio: string | number = '') => {
  const pattern = /[0-9.]+:[0-9.]+/gm

  return pattern.test(String(ratio))
}

export {
  calculateAspectRatio,
  ratioDimensions,
  validAspectRatio,
  wait,
}
