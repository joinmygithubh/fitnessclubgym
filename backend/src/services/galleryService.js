const Gallery = require('../models/Gallery');

class GalleryService {
  async getAllGalleryItems() {
    return await Gallery.find({}).sort({ createdAt: -1 }).lean();
  }

  async addGalleryItem({ title, imageUrl, category, publicId }) {
    return await Gallery.create({
      title,
      imageUrl,
      category: category || 'Gym Facilities',
      publicId: publicId || ''
    });
  }

  async deleteGalleryItem(id) {
    const item = await Gallery.findById(id);
    if (!item) {
      throw new Error('Gallery item not found');
    }
    await item.deleteOne();
    return true;
  }
}

module.exports = new GalleryService();
