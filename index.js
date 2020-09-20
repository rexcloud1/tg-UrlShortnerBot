bool(os.environ.get("WEBHOOK", False)):
    from config import Config
else:
    from config import Config

require('./bot');
