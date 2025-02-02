module.exports = () => {
	return `<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/xsl" href="sdctemplate.xslt"?>
<SDCPackage xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:ihe:qrph:sdc:2016"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xsi:schemaLocation="urn:ihe:qrph:sdc:2016 ../SDC-Schema-Packages/SDCRetrieveForm.xsd"
	packageID="PKG_LDCT_Lung" version="1.0.0" lineage="LDCTLung"
	fullURI="_baseURI=www.cancercare.on.ca/LDCTlung/SDC/IHE/&amp;_lineage=LDCTLung&amp;_version=1.0.0&amp;_docType=sdcPKG">
	<XMLPackage>
		<FormDesign xmlns="urn:ihe:qrph:sdc:2016"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="urn:ihe:qrph:sdc:2016 SDCFormDesign.xsd" ID="FORM_LDCT_Lung"
			formTitle="Lung Cancer Screening Template"
			baseURI="www.cancercare.on.ca/LDCTlung/SDC/IHE/" version="1.0.0" lineage="LDCTLung"
			fullURI="_baseURI=www.cancercare.on.ca/LDCTlung/SDC/IHE/&amp;_lineage=LDCTLung&amp;_version=1.0.0&amp;_docType=sdcFDF">
			<Property type="meta" styleClass="copyright" order="1" propName="Copyright"
				val="(c) 2017 Cancer Care Ontario.  All rights reserved."/>
			<Property propName="Approval" propClass="meta" order="2" styleClass="float-right"
				val="CCO Cancer Imaging Program approved"/>
			<Property propName="GenericHeaderText" type="meta" styleClass="left"
				val="High Risk Lung Cancer Screening Summary (Checklist)"/>
			<Property propName="OfficialName" propClass="meta"
				val="LDCT Lung Cancer Screening Reporting Template"/>
			<Property propName="Category" propClass="meta" val="Thoracic"/>
			<Property propName="Restrictions" propClass="meta"
				val="Protocol LDCT Lung Cancer Screening."/>
			<Property propName="Required" propClass="meta" val="true"/>
			<Property propName="CTV_Dkey" propClass="meta" val=""/>
			<Property propName="ChecklistCKey" propClass="meta" val=""/>
			<Property propName="VersionID" propClass="meta" val="1.1"/>
			<Property propName="CurrentFileName" propClass="meta"
				val="LDCT Lung Screening Pilot ver 1.1"/>
			<Property propName="ApprovalStatus" propClass="meta" val="0"/>
			<Property propName="EffectiveDate" propClass="meta" val="2017-02-24" styleClass="right"/>
			<Body title="LDCT Lung Screening Template" ID="root" styleClass="title">
				<Property propName="Publisher" propClass="Reporttext" val="Cancer Care Ontario"/>
				<Property propName="Version" propClass="Reporttext" val="version 1.1"/>
				<Property propName="ReleaseDate" propClass="Reporttext" val="2017-02-24"/>
				<Contact>
					<Organization>
						<OrgName val="Cancer Care Ontario"/>
						<Email>
							<EmailAddress val="alexander.goel@cancercare.on.ca"/>
						</Email>
						<Email>
							<EmailAddress val="david.kwan@cancercare.on.ca"/>
						</Email>
					</Organization>
				</Contact>
				<ChildItems>
					<Section title="CLINICAL INFORMATION" type="level1" ID="000001">

						<ChildItems>
							<Question title="Clinical Information:" ID="000002">
								<ResponseField>
									<Response>
										<string val=""/>
									</Response>
								</ResponseField>
							</Question>
							<Question title="Reason for exam:" ID="000004">
								<ListField>
									<List>
										<ListItem title="Baseline scan" ID="000005"/>
										<ListItem title="12 month recall" ID="000006"/>
										<ListItem title="6 month follow-up" ID="000007"/>
										<ListItem title="3 month follow-up" ID="777777"/>
										<ListItem title="Other follow-up" ID="000008"/>
									</List>
								</ListField>
							</Question>
						</ChildItems>
					</Section>
					<Section title="COMPARISON STUDIES" type="level1" ID="000010">
						<ChildItems>
							<Question title="Comparison Study:" ID="000011">
								<ListField>
									<List>
										<ListItem title="None Available" ID="000012"/>
										<ListItem title="Previous CT Exam:" ID="000013">
											<ChildItems>
												<Question ID="000014" maxCard="0">
												<ResponseField>
												<Response>
												<date xsi:nil="true"/>
												</Response>
												<TextAfterResponse val="(dates)"/>
												</ResponseField>
												</Question>
											</ChildItems>
										</ListItem>
									</List>
								</ListField>
							</Question>
						</ChildItems>
					</Section>
					<Section ID="000032" title="Findings:">
						<ChildItems>
							<Question title="Location:" ID="000042">
								<ListField >
									<List>
										<ListItem title="Parenchymal" ID="000043" />
										<ListItem title="Subpleural" ID="000044"/>
										<ListItem title="Fissural" ID="000045"/>
									</List>
								</ListField>
							</Question>
							<Question title="Attenuation:" ID="000046">
								<ListField>
									<List>
										<ListItem title="Solid" ID="000047"/>
										<ListItem title="Part-solid" ID="000051"/>
										<ListItem title="Pure Ground Glass" ID="000060"/>
									</List>
								</ListField>
							</Question>
							<Question title="Mean diameter:" ID="000048">
								<ResponseField>
									<Response>
										<integer xsi:nil="true"/>
									</Response>
									<ResponseUnits val="mm"/>
								</ResponseField>
							</Question>
							<Question title="+Length:" ID="000049" minCard="0">
								<ResponseField>
									<Response>
										<integer xsi:nil="true"/>
									</Response>
									<ResponseUnits val="mm"/>
								</ResponseField>
							</Question>
							<Question title="+Width:" ID="000050" minCard="0">
								<ResponseField>
									<Response>
										<integer xsi:nil="true"/>
									</Response>
									<ResponseUnits val="mm"/>
								</ResponseField>
							</Question>
							<Question title="Margins:" ID="000077">
								<Property propClass="numbering" propName="numbering" val="vi"/>
								<ListField numCols="6">
									<List>
										<ListItem title="Spiculated" ID="000078"/>
										<ListItem title="Smooth" ID="000079"/>
										<ListItem title="Lobulated" ID="000080"/>
										<ListItem title="Polygonal" ID="000081"/>
										<ListItem title="Halo" ID="000082"/>
										<ListItem title="Obscured" ID="000083"/>
									</List>
								</ListField>
							</Question>
							<Question title="Calcification:" ID="000084">
								<Property propClass="numbering" propName="numbering" val="vii."/>
								<ListField numCols="3">
									<List>
										<ListItem title="None" ID="000085"/>
										<ListItem title="Benign Pattern" ID="000086"/>
										<ListItem title="Indeterminate" ID="000087"/>
									</List>
								</ListField>
							</Question>
						</ChildItems>
					</Section>
					<Section title="IMPRESSIONS" type="level1" ID="000131">
						<ChildItems>
							<Question title="Pulmonary nodule summary:" ID="000112">
								<Property propClass="numbering" propName="numbering" val="1."/>
								<ResponseField>
									<Response>
										<string val=""/>
									</Response>
								</ResponseField>
							</Question>
							<Section title="Lung-Rads Version 1.1 Assessment Category:"
								type="level2" ID="000114">
								<Property propClass="instruction" propName="worrisomenodule"
									val="The most worrisome nodule described above is assigned a Lung-RADS category"/>
								<ChildItems>
									<Question title="Lung-Rads Version 1.0 Assessment Category:"
										ID="000115">
										<Property type="numbering" propName="numbering" val="2."/>
										<ListField>
											<List>
												<ListItem
												title="0 - Additional lung cancer screening CT images and/or comparison to prior chest CT examinations is needed"
												ID="000116"/>
												<ListItem
												title="1 - Continue annual screening with LDCT in 12 months"
												ID="000117"/>
												<ListItem
												title="2 - Continue annual screening with LDCT in 12 months"
												ID="000118"/>
												<ListItem title="3 - LDCT in 6 months" ID="000119"/>
												<ListItem
												title="4A - LDCT in 3 months; PET/CT may be used when there is a = 8 mm solid component"
												ID="000120"/>
												<ListItem
												title="4B - chest CT with or without contrast, PET/CT and/or tissue sampling depending on the *probability of malignancy and comorbidities. PET/CT may be used when there is a = 8 mm solid component"
												ID="000121"/>
												<ListItem
												title="4X - chest CT with or without contrast, PET/CT and/or tissue sampling depending on the *probability of malignancy and comorbidities. PET/CT may be used when there is a = 8 mm solid component"
												ID="000122"/>
											</List>
										</ListField>
									</Question>
								</ChildItems>
							</Section>
							<Section title="Actionable incidental Findings (S Modifier):"
								ID="000123">
								<!-- section title is just for display. Do not add RADLEX code because it would repeat with 3.a. causing data integrity issues-->
								<Property propClass="numbering" propName="numbering" val="3."/>
								<ChildItems>
									<Question ID="pendiing" title="Actionable incidental Findings:">
										<Property propClass="numbering" propName="numbering"
											val="a."/>
										<ListField>
											<List>
												<ListItem title="Yes" ID="02384098">
												<ChildItems>
												<Question ID="394570923"
												title="Actionable incidental Findings (reiterate incidental finding(s)):">
												<ResponseField>
												<Response>
												<string val=""/>
												</Response>
												</ResponseField>
												</Question>
												<Question ID="39759"
												title="Recommendation for follow-up:">
												<ListField>
												<List>
												<ListItem ID="39759.1" title="Refer to Family Doc"/>
												<ListItem ID="39759.2" title="Refer to Specialist"/>
												<ListItem ID="39759.3" title="Future Imaging"/>
												</List>
												</ListField>
												</Question>
												</ChildItems>
												</ListItem>
												<ListItem title="No" ID="59823098"/>
											</List>
										</ListField>
									</Question>
								</ChildItems>
							</Section>
							<Question title="+Other Comments" ID="000129">
								<ResponseField>
									<Response>
										<string val=""/>
									</Response>
								</ResponseField>
							</Question>
						</ChildItems>
					</Section>
				</ChildItems>
			</Body>
			<Footer styleClass="left" ID="Footer.1a" title="Footer">
				<!--<DisplayedItem val="+ Data elements preceded with this symbol are optional"/>-->
				<Property propName="DataElements"
					val="+ Data elements preceded with this symbol are optional"/>
			</Footer>
		</FormDesign>
	</XMLPackage>
</SDCPackage>`;
}
