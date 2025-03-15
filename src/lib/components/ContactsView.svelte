<script>
    import Linkedin from '@lucide/svelte/icons/linkedin';
    import Github from '@lucide/svelte/icons/github';
    import Instagram from '@lucide/svelte/icons/instagram';
    import Mail from '@lucide/svelte/icons/mail';
</script>

<div class="text-center space-y-4">
    <h2 class="text-3xl font-bold">Contacts</h2>
    <ul class="space-y-2">
        <li>
            <a href="mailto:marco.lanconelli@outlook.it" target="_blank" type="button" class="btn preset-outlined-primary-500">
                <span>
                    marco.lanconelli@outlook.it
                </span>
                <span>
                    <Mail size={20} />
                </span>
            </a>
        </li>
        <li>
            <a href="https://github.com/mistahuman" target="_blank" type="button" class="btn preset-outlined-primary-500">
                <span>
                    mistahuman
                </span>
                <span>
                    <Github size={20} />
                </span>
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/marco-lanconelli" target="_blank" type="button" class="btn preset-outlined-primary-500">
                <span>
                    marco-lanconelli
                </span>
                <span>
                    <Linkedin size={20} />
                </span>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/lancomarco" target="_blank" type="button" class="btn preset-outlined-primary-500">
                <span>
                    lancomarco
                </span>
                <span>
                    <Instagram size={20} />
                </span>
            </a>
        </li>
    </ul>
</div>