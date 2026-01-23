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
                        Solicitud Incorrecta
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Hubo un problema con tu solicitud. Por favor, verifica
                        los datos e intenta nuevamente.
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
                        No Autorizado
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Necesitas iniciar sesión para acceder a esta página.
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
                        Acceso Denegado
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        No tienes los permisos necesarios para ver este
                        contenido.
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
                        Página No Encontrada
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        La página que buscas no existe o fue movida a otro
                        lugar.
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
                        Error Interno del Servidor
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Algo salió muy mal de nuestro lado. Nuestro equipo ya
                        fue notificado.
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
                        Gateway Incorrecto
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        Recibimos una respuesta inválida de uno de nuestros
                        servidores. Intenta de nuevo en un momento.
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
                        Servicio No Disponible
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        El servicio está temporalmente sobrecargado o en
                        mantenimiento. Por favor, intenta más tarde.
                    </p>
                    <!-- {:else if $page.status === 504} -->
                    <div class="mb-8 flex justify-center">
                        <img
                            src="/Error/504.png"
                            alt="Error 504"
                            class="h-60 w-60"
                        />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                        Tiempo de Espera Agotado
                    </h2>
                    <p class="mx-auto max-w-md text-lg text-gray-600">
                        No obtuvimos una respuesta a tiempo de uno de nuestros
                        servicios. Intenta recargar la página.
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
                    href="/home"
                    class="rounded-lg bg-green-700 px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-gray-950 hover:shadow-xl"
                >
                    Volver a la página principal
                </a>
            </div>
        </div>
    </div>
</main>
