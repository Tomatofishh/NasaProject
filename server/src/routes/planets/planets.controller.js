const { getAllPlanets } = require('../../models/planets.model');

function httpGetALLPlanets(req, res) {
    return res.status(200).json(getAllPlanets());
}
module.exports = {
    httpGetALLPlanets,
};