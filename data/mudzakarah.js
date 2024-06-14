

function populate(item) {
    return `
    <div class="col-lg-6 bottom-spacer">
          <div>
            <div class="single__blog d-flex align-items-center">
              <div class="thum">
                <img src="${item.thumb}" alt="">
              </div>
              <div class="newsinfo">
                <span>${item.date}</span>
                <a href="${item.link}" target="_blank">
                  <h3>${item.title}</h3>
                </a>
                <p>${item.desc}</p>
                <a class="read_more" href="${item.link}" target="_blank">Watch Video</a>
              </div>
            </div>
          </div>
    `;
}