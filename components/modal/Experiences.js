import ModalButton from "./ModalButton";
import classes from "./Modal.module.css";
import ModalWrapper from "./ModalWrapper";

export default function Experiences({ title }) {
	return (
		<ModalWrapper
			title={title}
			backButton={
				<ModalButton
					title={title}
					value="< Ma Formation"
					target="maformation"
				/>
			}
			forwardButton={
				<ModalButton
					title={title}
					value="Mes Loisirs >"
					target="mesloisirsetintérêts"
				/>
			}
			modalName="Mes Expériences Professionnelles"
		>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>
				Développement Web :
			</h5>
			<ul>
				<li>
					<span className={classes.itemTitle}>Mai 2021 : </span>Bénévolat -
					Poursuite du développement de l&apos;application de l&apos;Association
					Kikassi Kikassa basée à Arles
				</li>
				<li>
					<span className={classes.itemTitle}>Mars 2021 : </span>Stage de 2 mois
					avec l&apos;Association Kikassi Kikassa basée à Arles
				</li>
				<li>
					<span className={classes.itemTitle}>Janvier 2021 : </span>Projet de
					site E-Commerce réalisé en formation
				</li>
				<li>
					<span className={classes.itemTitle}>Août 2018 : </span>Stage de 6 mois
					avec l&apos;entreprise FinKey à Lyon
				</li>
				<li>
					<span className={classes.itemTitle}>Avril 2018 : </span>Projet en
					formation pour le restaurant Zappo basé à Lyon
				</li>
			</ul>
			<hr />
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Administratif :</h5>
			<ul>
				<li>
					<span className={classes.itemTitle}>Juillet 2020 : </span>Stage de 2
					semaines chez CGI à Lyon - Chargée d&apos;Assistance Téléphonique
				</li>
				<li>
					<span className={classes.itemTitle}>Juin 2014 - Février 2018 : </span>
					La Mutuelle Générale - Gestionnaire Adhérents - St Priest
				</li>
				<li>
					<span className={classes.itemTitle}>
						Juin 2012 - Septembre 2013 :
					</span>
					Menissez - Assistante Logistique - Feignies (Nord)
				</li>
				<li>
					<span className={classes.itemTitle}>Avril 2005 : </span>Secrétaire - 6
					mois - Les Bains Douches - Aulnoye-Aymeries (Nord)
				</li>
				<li>
					<span className={classes.itemTitle}>Septembre 2002 : </span>Agente
					Administrative - 3 mois - TGI - Avesnes/Helpe (Nord)
				</li>
			</ul>
			<hr />
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Commerce :</h5>
			<ul>
				<li>
					<span className={classes.itemTitle}> Août 2009 : </span>Employée de
					Libre-service - 1 mois - La Halle Aux Chaussures - Avesnes/Helpe
					(Nord)
				</li>
				<li>
					<span className={classes.itemTitle}>Décembre 2006 : </span>Employée de
					Libre-service - 2 ans - Woolworths - Tonbridge (UK)
				</li>
				<li>
					<span className={classes.itemTitle}> Août 2009 : </span>Employée de
					Libre-service - 2 mois - Asda - Maidstone (UK)
				</li>
			</ul>
			<hr />
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Autres :</h5>
			<ul>
				<li>
					<span className={classes.itemTitle}>Juillet 2011 :</span> Employée
					Polyvalente pour Les Chautets - 2 mois - Bernex (Haute-Savoie)
				</li>
			</ul>
		</ModalWrapper>
	);
}
