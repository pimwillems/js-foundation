# Beoordeling

- **Functioneel:** onbekende of al beschikbare boeken worden niet afgehandeld; de zichtbare status wordt niet betrouwbaar opnieuw gerenderd.
- **Architectuur:** de gegenereerde View-code zoekt en muteert domeinstate.
- **Onderhoudbaarheid/veiligheid:** inline `onclick` verwacht een global, doorbreekt modules en maakt listenergedrag moeilijk traceerbaar; `innerHTML +=` bouwt de hele subtree opnieuw op.
- **Correctie:** de View rapporteert `action` en string-ID, de Controller converteert en coördineert, het Model bewaakt Return en retourneert een expliciet result object.
