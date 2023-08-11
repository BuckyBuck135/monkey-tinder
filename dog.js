class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;

    return `
        <div class= "dog-info">
            <h1>${name}, ${age}</h1>
            <h2>${bio}</h2>
        </div>
    <img src="${avatar}" class="dog-img">`;
  }

  hasBeenSwiped() {
    this.hasBeenSwiped = true;
  }
  hasBeenLiked() {
    this.hasBeenLiked = true;
  }

  //   getMatchLikeStatus(boolean) {
  //     this.hasBeenLiked = boolean;
  //     this.hasBeenSwiped = true;
  //   }
  //   getMatchRejectStatus(boolean) {
  //     this.hasBeen;
  //   }
}

export default Dog;
