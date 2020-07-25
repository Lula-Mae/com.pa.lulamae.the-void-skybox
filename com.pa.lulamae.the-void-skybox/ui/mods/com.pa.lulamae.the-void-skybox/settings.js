try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'The Void by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.the-void-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}