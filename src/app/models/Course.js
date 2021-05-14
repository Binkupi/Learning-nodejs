const mongoose=require('mongoose');
//thư viện tạo số thứ tự slug trùng
const slug=require('mongoose-slug-generator');

//thư viện xóa mềm, có thể phục hồi được
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type:String},
  description: {type:String},
  image: {type:String},
  videoId:{type:String}, 
  slug: { type: String, slug: 'name',unique:true },

},{timestamps:true,
}
);

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
          deleteAt:true,
          overrideMethods: 'all' ,
        });
module.exports= mongoose.model('Course', Course);