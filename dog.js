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
}
// return `<div class="dog-img">;
//
// </div>`;
//   <div class="dog-info">

//   </div>`;

export default Dog;
