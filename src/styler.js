function setStyle(element, properties) {
  for (let property in properties) {
    element.style[property] = properties[property];
  }
}

export {setStyle};
