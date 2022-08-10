import STAGES from './stages.js';

class StageRetrievalService {
    getStageById(id) {
        const stage = STAGES.filter((stage) => stage.id === id);
        return stage.length === 1 ? stage[0] : null;
    }

    getAllStages() {
        return STAGES;
    }
}

export default StageRetrievalService;