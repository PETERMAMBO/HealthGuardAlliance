document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('smallHeader').addEventListener('click', function(){
        var privacyPolicyParagraph = document.getElementById('headerMenu');
    
        privacyPolicyParagraph.style.display = 'block'; 

        
    })

    document.getElementById('home').addEventListener('click', function() {
        window.location.href = 'Homepage.html';
        });

        document.getElementById('joinUs').addEventListener('click', function() {
        window.location.href = 'signup.html';
        }); 
        document.getElementById('aboutUs').addEventListener('click', function() {
        window.location.href = 'aboutUs.html';
    });
})
    
        