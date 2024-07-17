import ThoughtModel from "../schema/Thought.schema.js";

export const deleteThought = async function (req, res) {
    const { thoughtId } = req.params; 

    try {
     
        if (!mongoose.Types.ObjectId.isValid(thoughtId)) {
            return res.status(400).json({ message: "Invalid thought ID" });
        }

       
        const deletedThought = await ThoughtModel.deleteOne({ _id: thoughtId });

    
        if (deletedThought.deletedCount === 0) {
            return res.status(404).json({ message: "Thought not found" });
        }

       
        res.status(200).json({ message: "Thought deleted successfully" });
    } catch (error) {
     
        console.error("Error deleting thought:", error);
        res.status(500).json({ message: "Error deleting thought", error: error.message });
    }
}
