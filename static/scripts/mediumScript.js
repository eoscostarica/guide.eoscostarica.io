function mediumWidget() {
    MediumWidget.Init({
      renderTo: "#medium-widget",
      params: {
        resource: "https://medium.com/@eoscostarica",
        postsPerLine: 3,
        limit: 3,
        picture: "big",
        fields: ["description", "claps", "publishAt"],
        ratio: "original",
      },
    });
  } 