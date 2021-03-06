self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open('video-store').then(function(cache){
            return cache.addAll([
                '/index.html',
                '/Func.html',
                '/Style.css',
                '/PNG/JC.jpg',
                '/PNG/JD.jpg',
                '/PNG/JH.jpg',
                '/PNG/JS.jpg',
                '/PNG/QC.jpg',
                '/PNG/QD.jpg',
                '/PNG/QH.jpg',
                '/PNG/QS.jpg',
                '/PNG/KC.jpg',
                '/PNG/KD.jpg',
                '/PNG/KH.jpg',
                '/PNG/KS.jpg',
                '/PNG/AC.jpg',
                '/PNG/AD.jpg',
                '/PNG/AH.jpg',
                '/PNG/AS.jpg',
                '/PNG/C1.jpg',
                '/PNG/C2.jpg',
                '/PNG/C3.jpg',
                '/PNG/C4.jpg',
                '/PNG/C5.jpg',
                '/PNG/C6.jpg',
                '/PNG/C7.jpg',
                '/PNG/C8.jpg',
                '/PNG/C9.jpg',
                '/PNG/C10.jpg',
                '/PNG/D1.jpg',
                '/PNG/D2.jpg',
                '/PNG/D3.jpg',
                '/PNG/D4.jpg',
                '/PNG/D5.jpg',
                '/PNG/D6.jpg',
                '/PNG/D7.jpg',
                '/PNG/D8.jpg',
                '/PNG/D9.jpg',
                '/PNG/D10.jpg',
                '/PNG/H1.jpg',
                '/PNG/H2.jpg',
                '/PNG/H3.jpg',
                '/PNG/H4.jpg',
                '/PNG/H5.jpg',
                '/PNG/H6.jpg',
                '/PNG/H7.jpg',
                '/PNG/H8.jpg',
                '/PNG/H9.jpg',
                '/PNG/H10.jpg',
                '/PNG/S1.jpg',
                '/PNG/S2.jpg',
                '/PNG/S3.jpg',
                '/PNG/S4.jpg',
                '/PNG/S5.jpg',
                '/PNG/S6.jpg',
                '/PNG/S7.jpg',
                '/PNG/S8.jpg',
                '/PNG/S9.jpg',
                '/PNG/S10.jpg',
                '/PNG/red_back.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch',function(e){
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});