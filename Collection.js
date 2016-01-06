info =  new Mongo.Collection("info");


Meteor.methods({

insertDatos: function(options){	

return info.insert(options);
}
	Meteor.call("insertDatos",{
	nombre : nombre
	}
	)
});
