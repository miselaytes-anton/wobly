const application = process.argv[2];
switch (application) {
    case 'scraper':
        require('./backend/services/scraper');
        break;
    default:
        require('./backend');
}
