const gravityFactors = {
            Mercure: 0.38,
            Vénus: 0.91,
            Mars: 0.38,
            Jupiter: 2.34,
            Saturne: 1.06,
            Uranus: 0.92,
            Neptune: 1.19,
            Terre: 9.81,
        };

        document.getElementById('weightForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const earthWeight = parseFloat(document.getElementById('earthWeight').value);
            const planet = document.getElementById('planet').value;
            const image = document.querySelector('img');
            image.src = `src/asset/${planet.toLowerCase()}.png`;
            const gravityFactor = gravityFactors[planet];
            if (gravityFactor) {
                document.getElementById('weightForm').style.display = 'none';
                document.getElementById('resultbox').classList.remove('hidden');
                const calculatedWeight = earthWeight * gravityFactor;
                document.getElementById('result').textContent = `Ton poids sur ${planet} serait de ${calculatedWeight.toFixed(2)} kg.`;
            } else {
                document.getElementById('result').textContent = "Please select a valid planet.";
            }
        });
const resetBtn = document.getElementById('reset');
if (resetBtn) {
    resetBtn.addEventListener('click', function(event) {
        
        event.preventDefault();
        location.reload();
    });
}    