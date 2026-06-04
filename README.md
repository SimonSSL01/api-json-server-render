## Desplegar en Render

1. Entra a tu panel de **Render.com** e inicia sesión.
2. Haz clic en el botón **"New +"** (Nuevo) y selecciona **"Web Service"**.
3. Conecta tu cuenta de GitHub (si es la primera vez) y selecciona el repositorio que acabas de subir (`mi-api-falsa`).
4. Configura los siguientes campos en el formulario de Render:
* **Name:** Un nombre para tu proyecto (ej. `mi-json-server-api`).
* **Region:** Selecciona la más cercana a ti o déjala por defecto.
* **Branch:** `main`
* **Language:** `Node`
* **Build Command:** `npm install`
* **Start Command:** `npm start`


5. Baja hasta la sección de planes y asegúrate de seleccionar el plan **Free** ($0/mes).
6. Haz clic en **"Deploy Web Service"**.
