var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({
	description: 'Fetch list of images from rawdevart.com'
});
parser.addArgument(
	'URL',
	{
		help: 'URL of chapter to download, like https://rawdevart.com/comic/foo-bar/chapter-1/'
	}
);
var args = parser.parseArgs();

require('axios').get(args.URL).then(async response => {
	const $ = require('cheerio').load(response.data)
	$('.mb-3 .img-fluid').toArray().forEach(el => console.log($(el).attr('data-src')))
})