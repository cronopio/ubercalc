# UberCalc

## Calculadora Tarifa Uber

### Necesita Kilometros y Minutos


## Configuracion NGINX


```
server { 
      server_name ubercalc.cronop.io;
      listen 80;
      #access_log /va/log/nginx/ubercalc.access;
      #error_log /var/log/nginx/ubercalc.error error;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                root /var/UberCalc;
                index index.html index.htm;
                try_files $uri $uri/ index.html;
        }
    }
```
