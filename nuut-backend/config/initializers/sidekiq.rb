# TODO: 下記はHerokuのRedis To Go を使用する前提、RenderやPlanetScaleを使用する場合は変更が必要！

Sidekiq.configure_client do |config|
    config.redis = { size: 1 }
  end
  
  Sidekiq.configure_server do |config|
    config.redis = { url: ENV['REDIS_URL'] }
  end