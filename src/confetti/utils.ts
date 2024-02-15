type Rotate3dTransform = [number, number, number];

export const mapRange = (value: number, x1: number, y1: number, x2: number, y2: number) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

export const rotate = (degree: number, amount: number) => {
  const result = degree + amount;
  return result > 360 ? result - 360 : result;
};

export const coinFlip = () => Math.random() > 0.5;

// avoid this for circles, as it will have no visual effect
const zAxisRotation: Rotate3dTransform = [0, 0, 1];

export const rotationTransforms: Rotate3dTransform[] = [
  // dual axis rotations (a bit more realistic)
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
  // single axis rotations (a bit dumber)
  [1, 0, 0],
  [0, 1, 0],
  zAxisRotation,
];

function isEqual(arr1: [number, number, number], arr2: [number, number, number]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

export const shouldBeCircle = (rotationIndex: number) => {
  return !isEqual(rotationTransforms[rotationIndex], zAxisRotation) && coinFlip();
};
