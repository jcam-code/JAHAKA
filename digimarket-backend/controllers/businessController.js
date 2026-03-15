const { asyncHandler, errorHandler } = require('../utils/errorHandler');

// @desc    Create business
// @route   POST /api/businesses
// @access  Private (Business owners)
const createBusiness = asyncHandler(async (req, res) => {
  try {
    const { name, description, category, location } = req.body;
    
    const business = {
      id: 'business_id',
      name,
      description,
      category,
      location,
      ownerId: req.user.id
    };
    
    res.status(201).json({
      success: true,
      data: business
    });
  } catch (error) {
    return errorHandler(res, error);
  }
});

// @desc    Get all businesses
// @route   GET /api/businesses
// @access  Public
const getBusinesses = asyncHandler(async (req, res) => {
  try {
    const { page = 1, limit = 10, category, location } = req.query;
    
    // Your filtering and pagination logic
    const businesses = []; // Your data here
    
    res.json({
      success: true,
      count: businesses.length,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit)
      },
      data: businesses
    });
  } catch (error) {
    return errorHandler(res, error);
  }
});

module.exports = {
  createBusiness,
  getBusinesses
};