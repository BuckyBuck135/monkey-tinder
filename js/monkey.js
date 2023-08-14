class Monkey {
  constructor(data) {
    Object.assign(this, data);
  }

  getMonkeyHtml() {
    const { name, avatar, age, bio } = this;
    let monkeyHtml = `<div class="monkey-container">
  <div class="img-container">
    <img src="${avatar}" class="monkey-img" id="monkey-img">
  </div>
  <div class="monkey-info">
    <h1 class="monkey-name">${name}, ${age}</h1>
    <p class="monkey-bio">${bio}</p>
  </div>
</div>`;

    return monkeyHtml;
  }
}

export default Monkey;
