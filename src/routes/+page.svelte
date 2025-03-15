<script>
    import HomeView from "$lib/components/HomeView.svelte";
    import ContactsView from "$lib/components/ContactsView.svelte";
    import ProfileView from "$lib/components/ProfileView.svelte";
</script>

<section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center px-6"
>
    <HomeView />
</section>
<hr class="hr" />
<section
id="mycv"
class="min-h-screen flex flex-col items-center justify-center px-6"
>
<div class="container mx-auto flex justify-center p-10 pt-20 pb-5">
    <ProfileView />
</div>
</section>
<hr class="hr" />
<section
    id="contacts"
    class="min-h-screen flex flex-col items-center justify-center px-6"
>
    <ContactsView />
</section>
