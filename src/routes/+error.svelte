<script lang="ts">
    import { page } from "$app/stores";
</script>

<main class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-2xl text-center">
        <!-- Icono/Logo de PlantApp -->

        <!-- Error Estatus -->
        <div class="space-y-6">
            <div class="space-y-2">
                <h1 class="text-8xl font-bold text-green-700">
                    {$page.status}
                </h1>

                <!-- Lógica para mensajes personalizados -->
                {#if $page.status === 400}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/400.png"
                            alt="Error 400"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        ¡Oops! Algo no cuadra
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Tu navegador envió una solicitud que nuestro servidor no
                        pudo entender. Revisa que todo esté correcto y vuelve a
                        intentarlo.
                    </p>
                {:else if $page.status === 401}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/401.png"
                            alt="Error 401"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        ¡Alto ahí! Identifícate
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Para ver esta página, necesitas iniciar sesión. Parece
                        que no lo has hecho o tu sesión ha expirado.
                    </p>
                {:else if $page.status === 403}
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
                        necesarios para entrar aquí. Es como tener la llave de
                        la casa, pero no la del cuarto secreto.
                    </p>
                {:else if $page.status === 404}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/404.png"
                            alt="Error 404"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        ¿Te has perdido en el jardín?
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Esta página no existe. Puede que la hayamos movido o que
                        nunca haya existido. No te preocupes, puedes volver al
                        inicio.
                    </p>
                {:else if $page.status === 500}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/500.png"
                            alt="Error 500"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        ¡Houston, tenemos un problema!
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Algo se ha roto en nuestros servidores. Ya estamos
                        trabajando para arreglarlo. ¡Gracias por tu paciencia!
                    </p>
                {:else if $page.status === 502}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/502.png"
                            alt="Error 502"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        Comunicación Interrumpida
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Estamos teniendo problemas para comunicarnos con uno de
                        nuestros servicios. Es como un teléfono descompuesto.
                        Inténtalo de nuevo en un momento.
                    </p>
                {:else if $page.status === 503}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/503.png"
                            alt="Error 503"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        En Mantenimiento
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Estamos haciendo algunas mejoras en nuestros servicios.
                        Volveremos a estar en línea pronto. ¡Disculpa las
                        molestias!
                    </p>
                {:else if $page.status === 504}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/504.png"
                            alt="Error 504"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        ¿Se fue la señal?
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Uno de nuestros servicios está tardando demasiado en
                        responder. Puede que esté sobrecargado. Por favor, ten
                        paciencia y vuelve a intentarlo.
                    </p>
                {:else}
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Brand/PlantApp.png"
                            alt="Plant Icon"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        Ha Ocurrido un Error
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Oops. {$page.error?.message || "Algo salió mal."}
                    </p>
                {/if}
            </div>

            <!-- Boton para volver a la página principal -->
            <div class="pt-4">
                <a
                    href="/"
                    class="rounded-lg bg-green-700 px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-gray-950 hover:shadow-xl"
                >
                    Volver a un lugar seguro
                </a>
            </div>
        </div>
    </div>
</main>
