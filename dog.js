class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    // const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    // const { name, avatar, age, bio } = this;
    // let dogHtml = `<div class = "dog-info">
    // <h1 class="dog-name">${name}, ${age}</h1>
    // <p class="dog-bio">${bio}</p>
    //  </div>
    // <div class="img-container">
    // <img src="${avatar}" class="dog-img">
    // </div>`;
    const { name, avatar, age, bio } = this;
    // let dogHtml = `
    //   <div class="dog-container">
    //     <div class="dog-info">
    //       <h1 class="dog-name">${name}, ${age}</h1>
    //       <p class="dog-bio">${bio}</p>
    //     </div>
    //     <div class="img-container">
    //       <img src="${avatar}" class="dog-img">
    //     </div>
    //   </div>
    // `;

    let dogHtml = `<div class="dog-container">
  <div class="img-container">
    <img src="${avatar}" class="dog-img">
  </div>
  <div class="dog-info">
    <h1 class="dog-name">${name}, ${age}</h1>
    <p class="dog-bio">${bio}</p>
  </div>
</div>`;

    return dogHtml;
  }
}

export default Dog;
