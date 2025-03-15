<script lang="ts">
    import { Tabs } from "@skeletonlabs/skeleton-svelte";
    import AccordionEducation from "./AccordionEducation.svelte";
    import AccordionWork from "./AccordionWork.svelte";

    let group = $state("education");
    const lorem =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.";
</script>

<Tabs value={group} onValueChange={(e) => (group = e.value)}>
    {#snippet list()}
        <Tabs.Control value="education">Education</Tabs.Control>
        <Tabs.Control value="workexp">Work Experience</Tabs.Control>
        <Tabs.Control value="skills">Skills</Tabs.Control>
    {/snippet}
    {#snippet content()}
        <Tabs.Panel value="education">
            <AccordionEducation>
            </AccordionEducation>
        </Tabs.Panel>
        <Tabs.Panel value="workexp">
            <AccordionWork>
            </AccordionWork>
        </Tabs.Panel>
        <Tabs.Panel value="skills">
        </Tabs.Panel>
    {/snippet}
</Tabs>