Photos = new Mongo.Collection("photos");

Template.Photos.helpers({
	pics: function () {
		return [
			{ src: 'day-of/brian-emily.JPG' },
			{ src: 'day-of/bridal-party.JPG' },
			{ src: 'day-of/bridesmaids-look-at-tracy.JPG' },
			{ src: 'day-of/bridesmaids-tracy-peak.JPG' },
			{ src: 'day-of/derek-lisa.JPG' },
			{ src: 'day-of/roady-popo.JPG' },
			{ src: 'day-of/tracy-concerned.JPG' },
			{ src: 'day-of/tracy-full-dress.JPG' },
			{ src: 'day-of/tracy-photoshoot.JPG' },
			{ src: 'day-of/wedding-party-2.JPG' },
			{ src: 'day-of/wedding-party-cele.JPG' },
			{ src: 'day-of/wedding-party.JPG' },

		]
	}
});