class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    let dogHtml = `<div class = "dog-info">
        <h1 class="dog-name">${name}, ${age}</h1>
        <p class="dog-bio">${bio}</h2>
        </div>
        <img src="${avatar}" class="dog-img">`;
    return dogHtml;
  }
  hasBeenSwiped() {
    this.hasBeenSwiped != this.hasBeenSwiped;
  }
  hasBeenLiked() {
    this.hasBeenSwiped != this.hasBeenSwiped;
  }
}

export default Dog;
