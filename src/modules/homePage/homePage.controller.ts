import { Controller, Get, Param, Query } from  '@nestjs/common' 
import { ArtistsService } from '../artists/artists.service'
import { EventsService } from '../events/events.service'
import { VenuesService } from '../venues/venues.service'
import { LabelsService } from '../labels/labels.service'

@Controller('homepage')
export class HomePageController {
  constructor(
    private artistsService: ArtistsService,
    private eventsService: EventsService,
    private venuesService: VenuesService,
    private labelsService: LabelsService,
  ) {}
  
  @Get('getHomePageData/:searchInput')
  async getHomePageData(@Param('searchInput') autocomplete: string) {
    const artists = await this.artistsService.findAll({ autocomplete, take: 5 })
    const events = await this.eventsService.findAll({ autocomplete, take: 5 })
    const venues = await this.venuesService.findAll({ autocomplete, take: 5 })

    return {
      artists: artists.items,
      events: events.items,
      venues: venues.items
    }
  }

  @Get('getHomeItemDetails/artist/:artistId')
  getHomeArtistDetails(@Param('artistId') artistId) {
    return this.artistsService.findOne(artistId)
  }

  @Get('getHomeItemDetails/venue/:venueId')
  getHomeVenueDetails(@Param('venueId') venueId) {
    return this.venuesService.findOne(venueId)
  }

  @Get('getHomeItemDetails/event/:eventId')
  getHomeEventDetails(@Param('eventId') eventId) {
    return this.eventsService.findOne(eventId)
  }

  @Get('getHomeItemDetails/label/:labelId')
  getHomeLabelDetails(@Param('labelId') labelId) {
    return this.labelsService.findOne(labelId)
  }

  @Get('map/getHomePageMapData')
  getHomePageMapData(@Query() coordinates) {
    return 'ma'
  }
}
