if(!this.Schemas){
  this.Schemas = {};
}

this.Schemas.Color = new SimpleSchema({
  simpleColor: {
    type: String,
    label: "Simple color",
    optional: true,
    defaultValue: "#65bd77",
    autoform: {type: "bootstrap-minicolors"}
  }
})