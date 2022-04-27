### Deploying in production, the manually created process child process may get killed so, that need to handle carefully.
### to keep our process keep alive through, PM2 is the solution.
### PM2 is production process manager for node app with built-in load balancer.
### adv -keep app alive forever, -reload them without downtime, facilitate common sys admin task like monitor, stop and delete process etc.
### PM2 comes with load-balancer but you have to tell pm2 to run cluster mode else run as normal single threaded-one core, one execution stack node application which we don't want.
### under the hood pm2 uses node cluster module as we used to built with vanilla.
### scaled app child process can automatically share server port.
### can use pm2 two ways as command line or making process config file (js/yaml/json file).
### install pm2 globally. 
### here i use process config file rather commands in terminal for using pm2 in our node app.
### CREATING PM2 PROCESS FILE:(adv fine tune, options, env var, log file for each app)
#### to create process file use command pm2 ecosystem
#### after that use pm2 [start|restart|stop|delete]ecosystem.config.js
#### instance in config file deside how many cores MAX use all cores.
#### any file in dir or sub dir change autorestart set true in config.
# commands:
## PM2 start command:
### pm2 start ecosystem.config.js
## PM2 monitor command:
### pm2 monit
## PM2 stop any/all process command:
### pm2 stop all/app-name
## PM2 delete any/all process command:
### pm2 delete all/app-name
## PM2 list all app command:
### pm2 list 
# to test this pm2 app use load test rather than many req from browser. open pm2 monit while load testing.
 




