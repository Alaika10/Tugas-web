var EMAIL = 'alaikaizatulilmi@gmail.com';
var buttons = document.querySelectorAll('#skillList button');
function showSkill(btn) {
  buttons.forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('skillLogo').innerHTML = btn.querySelector('svg').outerHTML;
  document.getElementById('skillTitle').textContent = btn.dataset.title;
  document.getElementById('skillDesc').textContent = btn.dataset.desc;
}
buttons.forEach(function (btn) { btn.addEventListener('click', function () { showSkill(btn); }); });
showSkill(buttons[0]);

document.getElementById('send').addEventListener('click', function () {
  var pesan = document.getElementById('pesan').value.trim();
  window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Halo Alaika') + '&body=' + encodeURIComponent(pesan);
});
document.getElementById('copy').addEventListener('click', function () {
  var msg = document.getElementById('msg');
  try {
    navigator.clipboard.writeText(EMAIL).then(function () { msg.textContent = 'Email disalin!'; }, function () { msg.textContent = EMAIL; });
  } catch (e) { msg.textContent = EMAIL; }
});
document.getElementById('year').textContent = new Date().getFullYear();