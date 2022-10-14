module.exports = mongoose => {
    const BlogSchema = mongoose.Schema({
        title: String,
        body: String,
        date: Date
    })

    BlogSchema.method('toJSON', function() {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id
        
        return object
    })

    const BlogModel = mongoose.model("Blog", BlogSchema)

    return BlogModel
}
