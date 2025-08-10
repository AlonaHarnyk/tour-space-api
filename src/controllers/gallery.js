import { getPictures } from "../services/gallery.js";

export const getPicturesCtrl = async (req, res) => {
  const page = isNaN(parseInt(req.query.page)) ? 1 : parseInt(req.query.page);

  const picturesData = await getPictures(page);

  return res.json(picturesData);
};
