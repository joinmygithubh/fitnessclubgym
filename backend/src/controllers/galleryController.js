const galleryService = require('../services/galleryService');
const { sendSuccess } = require('../utils/response');

const getGalleryItems = async (req, res, next) => {
  try {
    const items = await galleryService.getAllGalleryItems();
    return sendSuccess(res, 200, 'Gallery items fetched', items);
  } catch (error) {
    next(error);
  }
};

const createGalleryItem = async (req, res, next) => {
  try {
    const { title, imageUrl, category, publicId } = req.body;
    const item = await galleryService.addGalleryItem({ title, imageUrl, category, publicId });
    return sendSuccess(res, 201, 'Gallery item created', item);
  } catch (error) {
    next(error);
  }
};

const deleteGalleryItem = async (req, res, next) => {
  try {
    await galleryService.deleteGalleryItem(req.params.id);
    return sendSuccess(res, 200, 'Gallery item deleted', null);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGalleryItems,
  createGalleryItem,
  deleteGalleryItem
};
