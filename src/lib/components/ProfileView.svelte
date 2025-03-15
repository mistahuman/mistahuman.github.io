<script>
    import { Avatar } from "@skeletonlabs/skeleton-svelte";
    import Cake from '@lucide/svelte/icons/cake';
    import { Tabs } from "@skeletonlabs/skeleton-svelte";
    import AccordionEducation from "./AccordionEducation.svelte";
    import AccordionWork from "./AccordionWork.svelte";
    import AccordionSkills from "./AccordionSkills.svelte";

    let group = $state("aboutme");
</script>



<div class="w-full min-h-[300px]">
    <div class="space-y-4 p-4 flex flex-col items-center text-center">
        <Avatar src="me2.jpg" name="skeleton" classes="w-30 h-30 border border-black rounded-lg"/>
        <div class="p-4">
            <h3 class="h4">Marco Lanconelli</h3>
            <p class="opacity-80 text-sm">Software engineer and Fullstack developer</p>
            <p class="opacity-60 text-xs">
                <Cake size={16} class="align-middle inline-block" /> 09 July 1993
            </p>
            <p class="opacity-60 text-xs">
                Based in Bologna, Italy
            </p>
            <p class="mt-2">
                <a href="marcolanconelli_cv.pdf" download="marcolanconelli_cv.pdf" class="anchor">Download mycv in ita</a>
            </p>
            <!-- <blockquote class="blockquote text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, aliquid. Molestias, odio illum voluptatibus natus dignissimos, quidem
                est unde aspernatur veniam pariatur fuga distinctio esse in quas, repellendus neque reiciendis!"
                </blockquote> -->
            </div>
        </div>
    <div class="space-y-4 p-4 items-center">
        <Tabs value={group} onValueChange={(e) => (group = e.value)}>
            {#snippet list()}
                <Tabs.Control value="aboutme">About me</Tabs.Control>
                <Tabs.Control value="education">Education</Tabs.Control>
                <Tabs.Control value="workexp">Work Experience</Tabs.Control>
                <Tabs.Control value="skills">Skills</Tabs.Control>
            {/snippet}
            {#snippet content()}
                <Tabs.Panel value="aboutme">
                    <p class="p-4">
                        I am a software engineer and fullstack developer with a passion for web technologies and software development.
                        I have a strong background in computer science and I am always looking for new challenges and opportunities to grow.
                    </p>
                    <p class="p-4">
                        Work in progress ...
                    </p>
                </Tabs.Panel>
                <Tabs.Panel value="education">
                    <AccordionEducation>
                    </AccordionEducation>
                </Tabs.Panel>
                <Tabs.Panel value="workexp">
                    <AccordionWork>
                    </AccordionWork>
                </Tabs.Panel>
                <Tabs.Panel value="skills">
                    <AccordionSkills>
                    </AccordionSkills>
                </Tabs.Panel>
            {/snippet}
        </Tabs>
    </div>
</div>
