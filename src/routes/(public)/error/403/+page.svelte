<main class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-2xl text-center">
        <!-- Icono/Logo de PlantApp -->

        <!-- Error Estatus -->
        <div class="space-y-6">
            <div class="space-y-2">
                <h1 class="text-8xl font-bold text-green-700">403</h1>

                <!-- Lógica para mensajes personalizados -->
                <div class="mb-8 flex justify-center">
                    <img
                        src="/Error/403.png"
                        alt="Error 403"
                        class="h-60 w-60"
                    />
                </div>
                <h2 class="text-3xl font-semibold text-gray-800">
                    ¡Acceso Prohibido!
                </h2>
                <p class="mx-auto max-w-md text-lg text-gray-600">
                    Aunque te hemos identificado, no tienes los permisos
                    necesarios para entrar aquí. Es como tener la llave de la
                    casa, pero no la del cuarto secreto.
                </p>
            </div>

            <!-- Boton para volver a la página principal -->
            <div class="pt-4">
                <a
                    href="/debug"
                    class="rounded-lg bg-green-700 px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-gray-950 hover:shadow-xl"
                >
                    Volver al Debugger
                </a>
            </div>
        </div>
    </div>
</main>
