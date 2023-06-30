function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

grist.ready({
    requiredAccess: 'read table'
  });

grist.onOptions(function(options, interaction) {
  console.log(interaction.access_level);
});



