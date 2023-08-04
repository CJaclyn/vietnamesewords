function getColor() {
  const colors = [
    '#FFF5F5',
    '#FFF7EB',
    '#FEFFE5',
    '#EAFFE5',
    '#E5FDFF',
    '#F0F6FF',
    '#F2F0FF',
    '#FFF0FF',
  ];
  const num = Math.floor(Math.random() * 7);

  return colors[num];
}

export { getColor };
