export const recommended = (req, res) => res.render("home");
export const watch = (req, res) =>{
    console.log(req.params)
    return res.send(`Watch Video #${req.params.id}`)
};
export const edit = (req, res) => {
    console.log(req.params);
    return res.send("Edit");
};
export const search = (req, res) => {
    console.log(req.params);
    return res.send("Search")
};
export const upload = (req, res) => res.send("Upload")
export const deleteVideo = (req, res) => res.send("Delete Video");