module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.',
    instances:2,
    autorestart:true,
    max_memory_restart:'1G',
    exec_mode: 'cluster',
    env:{
      NODE_ENV: 'development',
    },
    env_production:{
      NODE_ENV: 'production',
    }

  }],

  
};
