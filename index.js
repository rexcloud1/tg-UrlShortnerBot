bool(os.environ.get("WEBHOOK", False)):
    from sample_config import Config
else:
    from config import Config

require('./bot');
