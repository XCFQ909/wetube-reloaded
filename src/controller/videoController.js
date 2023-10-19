let videos = [
  {
    title: "first Video",
    rating: 5,
    comments: 2,
    createdAt: "2minutes ago",
    views: 590,
    id: 1,
  },
  {
    title: "video #2",
    rating: 5,
    comments: 2,
    createdAt: "2minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "third video",
    rating: 5,
    comments: 2,
    createdAt: "2minutes ago",
    views: 59,
    id: 3,
  },
];

export const recommended = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  console.log(video.views);
  return res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const newVideo = {
    title: req.body.title,
    rating: 5,
    comments: 2,
    createdAt: "just now",
    views: 59,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
export const search = (req, res) => res.render("search");
export const deleteVideo = (req, res) => res.send("Delete Video");
